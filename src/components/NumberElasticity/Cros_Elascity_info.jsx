import { MathComponent } from "mathjax-react";
import PropTypes from "prop-types";
const CrossElascityInfoNumber = ({ number }) => {
  return number > 0 ? <div className="text-green-500">(substitute product)</div> : <div>(complementary product)</div>;
};
CrossElascityInfoNumber.propTypes = {
  number: PropTypes.number,
};

const ForYourInfoCrossElascityIndo = ({ number }) => {
  return number > 0 ? (
    <div>
      <MathComponent tex={String.raw`Ec = ${number}`} />
      <p> artinya adalah Ec &gt; 0, Barang “X” merupakan subsitusi barang “Y”. Kenaikan harga “Y” menyebabkan harga relatif “X” lebih murah, sehingga permintaan terhadap “X” meningkat.</p>
    </div>
  ) : (
    <div>
      <MathComponent tex={String.raw`Ec = ${number}`} />
      <p>artinya adalah Ec &lt; 0, Barang “X” merupakan komplementer barang “Y”. “X” hanya bisa digunakan bersama-sama “Y”. Penambahan atau pengurangan terhadap “X”, menyebabkan penambahan atau pengurangan terhadap “Y”. Kenaikan harga “Y” menyebabkan permintaan terhadap “Y” menurun, yang menyebabkan permintaan terhadap “X” ikut menurun.</p>
    </div>
  );
};
ForYourInfoCrossElascityIndo.propTypes = {
  number: PropTypes.number,
};
const ForYourInfoCrossElascityEng = ({ number }) => {
  return number > 0 ? (
    <div>
      <MathComponent tex={String.raw`Ec = ${number}`} />
      <p>This means that Ec &gt; 0, Barang &quot;X&quot; is a substitute for Barang &quot;Y&quot;. An increase in the price of Barang &quot;Y&quot; makes the relative price of Barang &quot;X&quot; cheaper, leading to an increase in demand for Barang &quot;X&quot;.</p>
    </div>
  ) : (
    <div>
      <MathComponent tex={String.raw`Ec = ${number}`} />
      <p>
        This means that Ec &lt; 0, &quot;X&quot; is a complementary good to &quot;Y.&quot; &quot;X&quot; can only be used together with &quot;Y.&quot; An increase or decrease in the quantity of &quot;X&quot; results in a corresponding increase or decrease in the quantity of &quot;Y.&quot; An increase in the price of &quot;Y&quot; leads to a decrease in the demand for &quot;Y,&quot; causing a
        decrease in the demand for &quot;X&quot; as well.
      </p>
    </div>
  );
};
ForYourInfoCrossElascityEng.propTypes = {
  number: PropTypes.number,
};

export { CrossElascityInfoNumber, ForYourInfoCrossElascityIndo, ForYourInfoCrossElascityEng };
