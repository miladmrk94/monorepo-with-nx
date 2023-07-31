import axios from "axios";

const Category = ({ data }) => {
  return (
    <div>

      <h2>blogs</h2>
      <div>
        {data.map((i) => {
          return (
            <div key={i.id} style={{ display: "flex", flexDirection: "column" }}>
              <h2>{i.title}</h2>
              <span>{i.category}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Category;


export async function getServerSideProps(context) {

  const { params, query } = context

  //console.log("context ------>", params);
  console.info("context x---->", context, query)

  const { data } = await axios({
    url: `http://localhost:3000/blogs?category=${params.category}`,
    method: "GET"
  })


  return {
    props: { data }
  }

}