import axios from "axios";


const About = ({ data }) => {
    console.log("data", data);

    return (

        <div>
            ABOUT PAGE
        </div>
    );
}

export default About;


export async function getStaticProps() {

    const { data } = await axios({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "get"
    })
    console.log("-----------------data", data);
    return {
        props: { data }
    }


}