
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
}

const get = async function handler(req, res) {
  try {
    const dataLandingPage = await prisma.landingPage.findFirst()
    res.status(200).json({...dataLandingPage, env:process.env.URL_IMAGE})
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
    const uploadedFile = files.imagePrev
    const {data, error} = await supa.storage.from("jayarasa").upload("landingpage050324.jpg", readFileSync(uploadedFile[0].filepath),{upsert: true})
    if(error) throw new Error(error.message)
    await prisma.landingPage.create({data:{
      image: data?.fullPath,
      heading: fields.heading,
      paragraf: fields.paragraf
    }})
    return res.status(200).json({"status": "OK"})        
  } catch (error) {
    console.log({error});
      return res.status(500).json({error})
  }

}