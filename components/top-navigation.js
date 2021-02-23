import Image from "next/image";
export default function TopNavigation() {
    return (
        <div className='container-fluid  mx-auto flex flex-wrap p-2 flex-col bg-warning items-center ' style={{height:'117px',width:'100%'}}>
            <Image 
            className=""
            style={{ backgroundColor: "red" }}
            width={251.64}
            height={53}
            src="/afroshop logo.png"
            alt="" />
            <div className=""  style={{height:'57px',width:'919px',borderRadius:'50px',border:'1px solid black'}} ></div>
        </div>
    );
}