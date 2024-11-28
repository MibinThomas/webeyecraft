import Link from "next/link";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Webeyecraft"} />
      <HomeOne />

      <div className="floating-btn-wrapper">
        <Link
          href="https://api.whatsapp.com/send?phone=+917994394866&text=Hello%2C%20I%20want%20to%20know%20more%20about%20Webeyecraft%20Technologies."
          className="tp-btn-inner"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect through Whatsapp"
        >
          <img
            src="/assets/img/whatsapp.png"
            alt=""
            width="60px"
            height="auto"
          />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Home;
