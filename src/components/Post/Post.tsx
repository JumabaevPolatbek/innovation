import { useParams } from "react-router-dom";
import "./Post.scss";
import { useGetPostQuery } from "../../store/reducer/postSlice";

const Post = () => {
  const { id } = useParams();
  const { data } = useGetPostQuery(id || " ");
  console.log(data);
  return (
    <article className="post">
      <h2
        className="post__title"
        dangerouslySetInnerHTML={{ __html: `${data?.title.rendered}` }}
      ></h2>

      <img
        src={data?.featured_image_src}
        alt={`${data?.id}`}
        className="post__img"
      />

      <p
        className="post__text"
        dangerouslySetInnerHTML={{ __html: data?.uagb_excerpt || "" }}
      ></p>

      {/* <p className="post__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam
        quo minus sapiente necessitatibus cumque sequi quam reprehenderit
        inventore, nulla, delectus iure et! Quod, cum? Qui optio deleniti veniam
        similique? Animi accusantium ullam tempora consequuntur obcaecati
        tempore aut in commodi dignissimos sapiente consequatur iste, hic odio,
        minus sed minima provident assumenda totam quo aspernatur modi dolores.
        Necessitatibus velit architecto nostrum ut, assumenda, reprehenderit
        facere eaque corrupti, impedit porro dignissimos qui soluta. Deserunt
        magni quibusdam quaerat atque dolore perspiciatis animi eius quisquam,
        saepe quas pariatur repudiandae voluptate non optio voluptatem commodi
        accusamus excepturi rem vero dolorem impedit dolor at. Voluptates,
        placeat.
      </p>
      <h3 className="post__header">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aliquam
        nihil, asperiores ratione iusto illum.
      </h3>
      <p className="post__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit
        provident voluptatum animi incidunt nam, tenetur rem doloremque, quos
        itaque culpa ex iste vero reiciendis dolores? Odio obcaecati voluptatem
        saepe.
      </p>
      <p className="post__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea
        provident consequatur laborum vitae, facilis ipsum, nisi reiciendis
        dolore libero, perferendis voluptas voluptates assumenda. Debitis, et
        laboriosam? Consectetur dolore atque at a, tempore officiis illum
        architecto totam sapiente cum, nesciunt dicta assumenda ex modi impedit
        ullam. Velit unde, sint sit officia minus distinctio adipisci a,
        accusantium debitis odio repellat deserunt veritatis incidunt error
        perspiciatis consectetur nobis nesciunt magnam explicabo ducimus quaerat
        vel aspernatur non! Enim reprehenderit voluptatem reiciendis, illum ab
        nesciunt minus doloribus maxime, cupiditate quos perspiciatis ullam
        expedita, iusto fuga. Sapiente officia voluptate similique sed! Odit
        sequi laudantium pariatur deserunt ea natus inventore, ratione cumque
        eos saepe fugit, assumenda porro beatae voluptates dolorum dolores
        perferendis. Ipsum tempore modi amet nostrum obcaecati tenetur suscipit
        facilis recusandae. Totam fuga ipsum esse corporis quasi! A quaerat
        eveniet quo inventore, ipsum explicabo maxime suscipit excepturi
        corrupti accusamus esse. Laboriosam rem quo nobis corrupti?
      </p>

      <h3 className="post__header">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        eveniet ratione dolor!
      </h3>
      <p className="post__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt sit
        rerum error cum veniam at exercitationem reiciendis voluptatum fuga
        veritatis laudantium eum, provident totam necessitatibus est eaque
        consequuntur tenetur consequatur assumenda minus quo non dolorem id?
        Labore nam laudantium doloremque autem, sint neque repellendus
        repudiandae delectus rerum fugiat laborum qui quod? Nam accusantium
        impedit provident a autem, magni dolor iste deserunt non sequi
        perspiciatis. Neque mollitia, hic eaque commodi iusto facere temporibus
        impedit dolores esse ipsa minima illum aliquid reprehenderit accusantium
        itaque consequuntur tenetur repudiandae ipsum quae accusamus maxime non
        laboriosam sint explicabo. Iusto enim, corrupti nostrum consequatur ea
        dolores praesentium rerum dolore fuga nemo, deserunt delectus nobis cum,
        aliquid voluptas explicabo necessitatibus. A harum asperiores repellat
        veritatis itaque quisquam amet at vitae hic nam error, odit veniam rerum
        doloremque aspernatur, ea pariatur ex quasi quos. Corporis quisquam,
        iste fugit eaque ad dolores cupiditate officia aliquid, veritatis soluta
        ipsa pariatur.
      </p> */}
    </article>
  );
};

export default Post;
