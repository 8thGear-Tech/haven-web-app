// Awelewa
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SuscribeBtn } from "../../Buttons/website/actionBtn/schoolBtn";
// import CardPhoto from "../../../Image/passport.jpg";
// import PackagePaymentData from "../../../data/paymentpackage.json";

export const PaymentpackageCard = (props) => {
  const { image, title, text } = props;
  return (
    <Card style={{ width: "20rem" }} className="paymentpackage mx-auto">
      <Card.Img
        variant="top"
        src={image}
        className="justify-content-center border border-top-0 border-start-0 border-end-0 Cardpicture"
      />
      <Card.Body>
        <Card.Title className=""> {title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <SuscribeBtn />
      </Card.Body>
    </Card>
  );
};

// export const PaymentPackage = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="CardWork row text-center justify-content-around ">
//           {PackagePaymentData.paymentpackagedata.map((Package) => {
//             return (
//               <>
//                 <div className="col-lg-3 col-md-5 col-sm-12" key={Package.id}>
//                   <PaymentpackageCard {...Package} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
