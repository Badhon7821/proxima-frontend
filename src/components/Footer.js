import moment from "moment";

const Footer = ({ loginTimeFooter }) => {
  return (
    <div
      className={`bg-slate-800 py-8 text-center ${
        loginTimeFooter ? "" : "fixed bottom-0 right-0 left-0"
      }`}
    >
      Proxima. All rights reserve. {moment().format("MMM DD YYYY")}
    </div>
  );
};

export default Footer;
