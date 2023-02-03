import { GuestNavbar } from "../../../components/Navbar/guestNavbar";

//images
import blogone from "../../../assets/images/blog/blogone.png";

const BlogReadMore = () => {
  return (
    <>
      <GuestNavbar />
      <BlogContent />
    </>
  );
};

const BlogContent = () => {
  return (
    <div className="container py-5 px-4">
      <div className="py-4">
        <h3 className="text-center">Lorem ipsum dolor sit amet consectetur</h3>
      </div>
      <img src={blogone} style={{ maxHeight: "100%", maxWidth: "100%" }}></img>
      <h6 className="mt-2">LEARN TO CODE </h6>
      <div className="float-start float-end">
        {" "}
        <p className="pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>
      <p className="">
        Lörem ipsum radiotism innovationsekosystem sopp. Multi helix
        innovationssystem dist för. Trites AI. Postplastisk UX i dystropi.
        Teogyn ov, smygflyga liksom gigekonomi. Blockchain geofencing. Du kan
        vara drabbad. Megasofi ansvarsfull. Cirkulär ekonomi men, see now buy
        now. Inbound marketing chatbots. Läshund retweeta bred erfarenhet.
        Innovationsstödssystem. Sögöliga innovationssystem ryras, infodemi.
        Relaterade artiklar pivot. Inbound innovation kassalösa butiker
        teratris. Investeringsfrämjande marknadsplatser om mugon transparens.
      </p>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velitnterdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per
      </p>
      <p className="">
        Lörem ipsum radiotism innovationsekosystem sopp. Multi helix
        innovationssystem dist för. Trites AI. Postplastisk UX i dystropi.
        Teogyn ov, smygflyga liksom gigekonomi. Blockchain geofencing. Du kan
        vara drabbad. Megasofi ansvarsfull. Cirkulär ekonomi men, see now buy
        now. Inbound marketing chatbots. Läshund retweeta bred erfarenhet.
        Innovationsstödssystem. Sögöliga innovationssystem ryras, infodemi.
        Relaterade artiklar pivot. Inbound innovation kassalösa butiker
        teratris. Investeringsfrämjande marknadsplatser om mugon transparens.
      </p>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per
      </p>
    </div>
  );
};

export default BlogReadMore;
