import css from "./Contacts.module.css";
import { ReactComponent as Phone } from "../../utils/images/phone.svg";
import { ReactComponent as Email } from "../../utils/images/sms.svg";
import { ReactComponent as Map } from "../../utils/images/map.svg";
import { ReactComponent as Facebook } from "../../utils/images/facebook.svg";
import { ReactComponent as Insta } from "../../utils/images/instagram.svg";
import Form from "./Form/Form";

const Contacts = () => {
  return (
    <div className={css.section} id="contacts">
      <div className={css.container}>
        <h2 className={css.title}>Contact us</h2>
        <div className={css.container768px}>
          <div className={css.contacts}>
            <div className={css.contact_block}>
              <p className={css.contact_type}>Phone:</p>
              <div className={css.contact_item}>
                <a href="tel:+380981234567">
                  <Phone className={css.contact_img} width={24} />
                </a>
                <p className={css.contact_text}>38 (098) 12 34 567</p>
              </div>
              <div className={css.contact_item}>
                <a href="tel:+380981234567">
                  <Phone className={css.contact_img} width={24} />
                </a>
                <p className={css.contact_text}>38 (093) 12 34 567</p>
              </div>
            </div>
            <div className={css.contact_block}>
              <p className={css.contact_type}>Email:</p>
              <div className={css.contact_item}>
                <a
                  href="mailto:office@ecosolution.com"
                  style={{ display: "flex" }}
                >
                  <Email className={css.contact_img} width={24} />
                </a>
                <p className={css.contact_text}>office@ecosolution.com</p>
              </div>
            </div>
            <div className={css.contact_block}>
              <p className={css.contact_type}>Adress:</p>
              <div className={css.contact_item}>
                <Map
                  className={css.contact_img}
                  width={24}
                  style={{ display: "flex" }}
                />
                <p className={css.contact_text}>
                  79005, Ukraine, Lvivstreet. <br className={css.hidden}/> Shota Rustaveli, 7
                </p>
              </div>
            </div>
            <div className={css.contact_block}>
              <p className={css.contact_type}>Social Networks:</p>
              <div className={css.contact_social_item}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Facebook className={css.contact_social_img} width={24} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Insta className={css.contact_social_img} width={24} />
                </a>
              </div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
