import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { PaymentpackageCard } from "../../../components/allCards/Website/paymentPackage";
import PackagePaymentData from "../../../data/paymentpackage.json";

const PaymentPackages = () => {
  return (
    <>
      <GuestNavbar />
      <PaymentPackage />
    </>
  );
};

const PaymentPackage = () => {
  return (
    <>
      <div className="container">
        <div className="CardWork row text-center justify-content-around mt-5">
          {PackagePaymentData.paymentpackagedata.map((Package) => {
            return (
              <>
                <div className="col-lg-3 col-md-5 col-sm-12" key={Package.id}>
                  <PaymentpackageCard {...Package} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PaymentPackages;
