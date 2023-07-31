import axios from "axios";
import Link from "next/link";

const Blogs = ({ data }) => {
    return (
        <div>

            <h2>blogs</h2>
            <div>
                {data.map((i) => {
                    return (
                        <div key={i.id}>
                            <Link href={`/blogs/${i.category}`}>

                                <h4>title: {i.title}</h4>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Blogs;


export async function getServerSideProps(context) {

    const { data } = await axios({
        url: "http://localhost:3000/blogs",
        method: "GET"
    })


    return {
        props: { data }
    }

}