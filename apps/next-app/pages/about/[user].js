import axios from 'axios';

const User = ({ data }) => {

    console.log("DAAAAA", data);

    return (<div>x</div>);
}

export default User;


export async function getStaticPaths() {

    const { data } = await axios({
        url: "https://jsonplaceholder.typicode.com/users/",
        method: "GET"
    })

    const paths = data.map((i) => {
        return {
            params: {
                user:
                    `${i.id}`
            }
        }
    })

    return {
        paths: paths,
        fallback: false
    }

}


export async function getStaticProps(context) {
    console.log("context----->", context);
    const { params } = context

    const { data } = await axios({ url: `https://jsonplaceholder.typicode.com/users/${params.user}`, method: "GET" })
    return {
        props: { data }
    }


}