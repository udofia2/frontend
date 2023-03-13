// import React, { useState, useEffect } from "react";
// // import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { introdata, meta } from "../../content_option";
// // import { Link } from "react-router-dom";
// import { GitHubData } from "./github";
// export const GithubPageApi = () => {
//   const [username, setUsername] = useState([]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <HelmetProvider>
//       <section id="home" className="home">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> {meta.title}</title>
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <div className="intro_sec d-block d-lg-flex align-items-center ">
//           <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-end">
//             <div className="align-self-center ">
//               <div className="intro mx-auto">
//                 <p className="mb-1x">
//                   This section demonstrate integration to an APIs( GitHub API
//                   Repository)
//                 </p>
//                 <div className="intro_btn-action pb-5">
//                   <div>
//                     <form onSubmit={handleSubmit}>
//                       <label>
//                         Type a Github Username:
//                         <input
//                           type="text"
//                           value={username}
//                           onChange={(event) => setUsername(event.target.value)}
//                         />
//                       </label>
//                       {/* <button type="submit">Submit</button> */}
//                     </form>
//                     <GitHubData username={username} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </HelmetProvider>
//   );
// };
// import React, { useState, useEffect } from "react";
// // import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { introdata, meta } from "../../content_option";
// // import { Link } from "react-router-dom";
// import { GitHubData } from "./github";
// import { Container, Row, Col } from "react-bootstrap";
// export const GithubPageApi = () => {
//   const [username, setUsername] = useState([]);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> GithubApi </title>
//           <meta name="description" content='github api integration' />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4">Github Api Integration</h1>
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lg="5">
//             <h3 className="color_sec py-4">{dataabout.title}</h3>
//           </Col>
//           <Col lg="7" className="d-flex align-items-center">
//             <div>
//               <p>{dataabout.aboutme}</p>
//             </div>
//           </Col>
//         </Row>
//         <Row className="sec_sp">
//           <Col lang="5">
//             <h3 className="color_sec py-4">Experience</h3>
//           </Col>
//           <Col lg="7">
//             {workExperience.map((data, i) => {
//               return (
//                 <div className="service_ py-4" key={i}>
//                   <h5 className="service__title">
//                     {data.where} - <span>({data.jobtitle})</span>
//                     <span className="service__date">{data.date}</span>
//                   </h5>
//                   {data.description.map((des, j) => {
//                     return <li key={j}>{des}</li>;
//                   })}
//                 </div>
//               );
//             })}
//           </Col>
//         </Row>
//       </Container>
//     </HelmetProvider>
//   );
// };
"use strict";