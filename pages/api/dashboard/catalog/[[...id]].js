
import prisma from "@/lib/prisma";
import supa from "@/lib/supabase";
import formidable from "formidable";
import { readFileSync } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function handler(req, res) {
    if(req.method == 'GET') {
        return await get(req, res)
    }
    if(req.method == 'POST') {
        return await post(req, res)
    }
    if(req.method == 'PUT') {
        return await put(req, res)
    }
    if(req.method == 'DELETE') {
        return await destroy(req, res)
    }
}

const get = async function handler(req, res) {
  try {
    const dataKatalog = await prisma.Katalog.findMany()
    res.status(200).json({data:dataKatalog, env:process.env.URL_IMAGE})
  } catch (error) {
    console.log({error});
    return res.status(500).json({error})
  }
}

const put = async function handler(req, res) {
try {
  const form = formidable({allowEmptyFiles: true});
  const [rawFields, files] = await form.parse(req);

  const fields = {};
  Object.entries(rawFields).forEach(([key, [value]]) => {
    try {
      fields[key] = JSON.parse(value);
    } catch {
      fields[key] = value;
    }
  });
  console.log(files);
  let uploadedFile = null;
  if (files.imagePrev && files.imagePrev.length > 0) {
    uploadedFile = files.imagePrev[0];
  }
  console.log(uploadedFile);
  if (!uploadedFile) {
    await prisma.landingPage.update({
      where: { id: fields?.id },
      data: {
        heading: fields.heading,
        paragraf: fields.paragraf,
      },
    });
    return res.status(200).json({ status: "OK" });
  } else {
    const currentDate = new Date();
    const { data, error } = await supa.storage
      .from("jayarasa")
      .upload(`landingpage${currentDate.getTime()}.jpg`, readFileSync(uploadedFile.filepath), {
        upsert: true,
      });
    if (error) throw new Error(error.message);
    await prisma.landingPage.update({
      where: { id: fields?.id },
      data: {
        heading: fields.heading,
        paragraf: fields.paragraf,
        image: data?.fullPath,
      },
    });
    return res.status(200).json({ status: "OK" });
  }
} catch (error) {
  console.log({ error });
  return res.status(500).json({ error: error.message });
}

}
const post = async function handler(req, res) {
  try {
    const form = formidable({allowEmptyFiles: true})
    const [rawFields, files] = await form.parse(req);
    const fields = {};
    Object.entries(rawFields).forEach(([key, [value]]) => {
      try {
        fields[key] = JSON.parse(value);
      } catch {
        fields[key] = value;
      }
    });
    const uploadedFile = files.image
    const date = new Date(); 
    const dateTime = date.getTime()
    const ext = uploadedFile[0].originalFilename.split(".").pop()
    const namaFile = uploadedFile[0].originalFilename.split(".").slice(0, -1).join(".")
    const {data, error} = await supa.storage.from("jayarasa").upload(`${namaFile}-${dateTime}.${ext}`, readFileSync(uploadedFile[0].filepath),{upsert: true})
    if(error) throw new Error(error.message)
    await prisma.Katalog.create({data:{
      judul: fields.judul,
      kontak: fields.kontak,
      harga:fields.harga,
      satuan:fields.satuan,
      deskripsi:fields.deskripsi,
      image: data?.fullPath,
    }})
    return res.status(200).json({"status": "OK"})        
  } catch (error) {
    console.log({error});
      return res.status(500).json({error:error.message})
  }

}

const destroy = async function handler(req, res) {
  try {
    const id = req.query.id[0]
    const dataKatalog = await prisma.Katalog.findFirst({where:{id}})
    const { storageError } = await supa.storage
      .from('jayarasa')
      .remove([``]);
    if (storageError) {
          throw new Error("eror anying")
    }
    await prisma.katalog.delete({where:{id:dataKatalog.id}})
    res.status(200).json({ok:"berhasil"})
  } catch (error) {
    console.log({error});
    return res.status(500).json({error:error.message})
  }
}