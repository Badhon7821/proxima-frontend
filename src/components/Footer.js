import moment from "moment";

const Footer = () => {
  return (
    <div className="bg-slate-800 py-8 text-center">
      Proxima. All rights reserve. {moment().format("MMM DD YYYY")}
    </div>
  );
};

export default Footer;
