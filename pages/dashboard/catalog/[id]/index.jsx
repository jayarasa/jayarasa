import LayoutAdmin from "@/components/layouts/admin/layout"
import { useState } from "react";
import { Card } from "flowbite-react";
import { Flowbite } from "flowbite-react";

const customTheme = {
  card: {
    root: {
      horizontal: {on: "flex-col md:flex-row"},
    },
  },
};

export default function Catalog() {

  return (
    <LayoutAdmin>
        <div className="max-w-xxl xl:mx-2 rounded overflow-hidden shadow-lg p-5">
             <h2 className="font-bold text-2xl">Detail</h2>
        </div>
        <div className="mt-6">
          <Flowbite theme={{ theme: customTheme }}>
            <Card 
              className="w-[80vw] md:w-[80vw]"
              horizontal
              renderImage={() => (
                <div className="w-full border-[1px] mb-4">
                  <img className="" src={`/logo.svg`} alt="gambar kue" />
                </div>
              )}  
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis quas voluptates ipsam magni eum ducimus dicta porro explicabo sunt esse sapiente, amet ipsa distinctio? Cumque a praesentium amet rem ex est, fugiat error similique ullam veritatis voluptates vero dolores. Consequuntur ut nulla cum animi, fuga voluptatibus dolor nesciunt necessitatibus aliquam velit ipsum facilis neque porro voluptatum reprehenderit ducimus laboriosam tempora inventore. Impedit quo ab iste distinctio nemo. Debitis minus quia ex recusandae culpa tempore, quidem vero aut sequi repudiandae voluptatibus provident nihil eum ut eveniet exercitationem cupiditate quaerat quas quam illum, at animi veniam saepe! Quo sapiente aut nihil quos, voluptatibus aliquam nesciunt unde aspernatur rerum minus, corporis ex hic? Nemo distinctio rerum iusto omnis libero illo esse fugit, asperiores, quam similique fuga necessitatibus aliquid blanditiis quod est veniam nisi odit. Commodi laudantium laborum cumque ex ipsum voluptatum. Vel, unde! Dolores deserunt rem consectetur error inventore fuga molestias eaque accusamus dicta, sed unde amet illum, neque consequuntur id optio? Necessitatibus impedit, totam hic praesentium libero magni quam repellat ducimus voluptate exercitationem, sunt dolorem, nesciunt distinctio vitae consequatur maxime pariatur in at illum. Dolorem delectus iusto atque ratione aspernatur a, ipsa deleniti eligendi quibusdam voluptate sint, iure ducimus officiis possimus debitis enim aliquam suscipit necessitatibus quo distinctio laborum? Ducimus possimus, omnis unde provident porro expedita, ipsam consequuntur quam tempore commodi architecto placeat voluptas a sapiente aperiam eligendi fuga asperiores ratione esse fugiat consequatur temporibus nesciunt ut! Maiores blanditiis qui, facere possimus laboriosam ut molestias quidem esse harum. Odio sapiente optio ducimus numquam nobis a commodi iste fugit est blanditiis, praesentium sint doloribus mollitia rerum quisquam non quod. Sunt, doloremque cupiditate hic cum assumenda quisquam et veritatis sint soluta modi ducimus at consectetur aspernatur? Cupiditate vero voluptatibus, aut, aliquam perferendis quod in nisi qui ratione illo sit dolores at impedit voluptatem!
              </p>
            </Card>
          </Flowbite>
        </div>
    </LayoutAdmin>
  );
}
