import { Link } from "react-router-dom";
import { Accordion } from "./Accordion";
const link1 = <Link id="link1" className="doc__links" to="/doc1">Свидетельство о внесении в ЕГРЮЛ от 06.12.2002 г.</Link>;
const link2 = <Link id="link2" className="doc__links" to="/doc2">Свидетельство о постановке на налоговый учет</Link>;
const link3 = <Link id="link3" className="doc__links" to="/doc3">Протокол о выборе Председателя от 29.10.2022 г.</Link>;
const link4 = <Link id="link4" className="doc__links" to="/doc4">Устав от 29.10.2022 г.</Link>;
const link5 = <Link id="link5" className="doc__links" to="/doc5">Правила внутреннего распорядка СНТ &#171;РАДАР&#187;</Link>;
const link6 = <Link id="link6" className="doc__links" to="/doc6">Присвоенные адреса участкам в СНТ &#171;РАДАР&#187;</Link>;
const faqList = [
  {
    q: "Уставные документы СНТ «РАДАР»",
    a: link1,
    b: link2,
    c: link3,
    d: link4,
    e: link6,
  },
  {
    q: "Правила внутреннего распорядка СНТ «РАДАР»",
    a: link5,
  },
  // {
  //   q: "Протоколы общих собраний членов СНТ «РАДАР»",
  //   a: link6,
  // },
];

function Documents() {
  return (
    <>
      <Accordion faqList={faqList} />
    </>
  );
}

export default Documents;

// import { Link } from "react-router-dom";

// function Documents() {
//   return (
//     <ul className="accordion">
//       <li className="accordion-item">
//         <div className="accordion-header">            Свидетельство о внесении в ЕГРЮЛ от 06.12.2002 г.
// </div>
//           <Link id="link1" className="accordion-body" to="/doc1">
//           </Link>
        
//       </li>
//       <Link id="link2" className="doc__links" to="/doc2">
//         Свидетельство о постановке на налоговый учет
//       </Link>

//       <Link id="link3" className="doc__links" to="/doc3">
//         Протокол о выборе Председателя от 29.10.2022 г.
//       </Link>

//       <Link id="link4" className="doc__links" to="/doc4">
//         Устав от 29.10.2022 г.
//       </Link>

//       <Link id="link5" className="doc__links" to="/doc5">
//         Правила внутреннего распорядка СНТ &#171;РАДАР&#187;
//       </Link>

//       <Link id="link6" className="doc__links" to="/doc6">
//         Присвоенные адреса участкам в СНТ &#171;РАДАР&#187;
//       </Link>
//     </ul>
//   );
// }

// export default Documents;
