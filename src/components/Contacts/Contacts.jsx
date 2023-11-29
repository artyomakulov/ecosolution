import css from "./Contacts.module.css";
import { ReactComponent as Phone } from "../../utils/images/phone.svg";
import { ReactComponent as Email } from "../../utils/images/sms.svg";
import { ReactComponent as Map } from "../../utils/images/map.svg";
import { ReactComponent as Facebook } from "../../utils/images/facebook.svg";
import { ReactComponent as Insta } from "../../utils/images/instagram.svg";
import Form from "./Form/Form";

const Contacts = () => {
  return (
    <div className={css.section}>
      <div className={css.container} id="contacts">
        <h2 className={css.title}>Contact us</h2>
        <div className={css.contacts}>
          <div className={css.contact_block}>
            <p className={css.contact_type}>Phone:</p>
            <div className={css.contact_item}>
              <Phone className={css.contact_img} width={24} />
              <p className={css.contact_text}>38 (098) 12 34 567</p>
            </div>
            <div className={css.contact_item}>
              <Phone className={css.contact_img} width={24} />
              <p className={css.contact_text}>38 (093) 12 34 567</p>
            </div>
          </div>
          <div className={css.contact_block}>
            <p className={css.contact_type}>Email:</p>
            <div className={css.contact_item}>
              <Email className={css.contact_img} width={24} />
              <p className={css.contact_text}>office@ecosolution.com</p>
            </div>
          </div>
          <div className={css.contact_block}>
            <p className={css.contact_type}>Adress:</p>
            <div className={css.contact_item}>
              <Map className={css.contact_img} width={36} />
              <p className={css.contact_text}>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </p>
            </div>
          </div>
          <div className={css.contact_block}>
            <p className={css.contact_type}>Social Networks:</p>
            <div className={css.contact_item}>
              <Facebook className={css.contact_img} width={24} />
              <Insta className={css.contact_img} width={24} />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contacts;
