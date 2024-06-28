// src/pages/About.js
import React from "react";
import { Container } from "@mui/material";

import webIcon from "../assets/web.png";
import targetIcon from "../assets/target.png";
import squareIcon from "../assets/square.png";
//import Quotes from "../components/Quotes/Quotes";
//import pain from "../assets/pain.mp3";

const About = () => {
  return (
    <div className="row-span-11 p-4 overflow-y-auto mt-32">
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            className="my-4 dark:bg-gray-800 dark:text-black"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "justify",
              width: "100%",
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={webIcon}
              alt="Icon 1"
              width={30}
              className="float-right mb-2"
            />
            <div>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  margin: 0,
                }}
              >
                Sistem informasi ini dirancang oleh mahasiswa tingkat akhir PSDKU Polinema Kabupaten
                Lumajang untuk memenuhi persyaratan kelulusan. Seiring dengan adanya pemanfaatan 
                teknologi khususnya internet, maka peneliti mencoba membuat model penelitian untuk 
                memantau kualitas udara menggunakan jaringan Internet of Things dengan pengembangan 
                sistem informasi berbasis website.Peneliti membuat project pemantauan kualitas udara 
                dengan pengembangan sistem informasi berbasis website. Pemantauan kualitas udara 
                merupakan faktor penting karena lingkungan yang bersih dan sehat dapat memepengaruhi 
                kondisi kesehatan manusia baik dalam ruangan ataupun diluar ruangan. Udara, suhu, dan 
                kelembaban merupakan beberapa hal yang mempengaruhi kehidupan, udara yang dihirup tidak 
                selalu bersih dan aman karena masih terdapat polusi udara yang bisa disebabkan dari 
                kendaraan, asap pabrik, dan lainnya. Itulah pentingnya mengetahui keadaan udara untuk 
                hunian yang sehat dan nyaman.
              </p>
            </div>
          </div>
          <div
            className="my-4 dark:bg-gray-800 dark:text-black"
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "justify",
              width: "100%",
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={targetIcon}
              alt="Icon 2"
              width={30}
              className="float-right mb-2"
            />
            <div style={{}}>
              <p
                style={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  margin: 0,
                }}
              >
                Pada masa ini penurunan kualitas udara di beberapa kota di wilayah Indonesia terus meningkat 
                diakibatkan beberapa hal diantaranya pertumbuhan industri dan perkembangan kendaraan bermotor 
                yang semakin pesat sebanding dengan pertumbuhan penduduk. Sehingga kualitas udara juga memiliki 
                dampak signifikan terhadap kesehatan manusia. Penyakit pernapasan, iritasi mata, dan masalah 
                kesehatan lainnya dapat timbul akibat paparan terhadap polutan udara dalam ruangan. Oleh karena 
                itu, pemantauan kualitas udara menjadi suatu aspek yang penting untuk memastikan bahwa hunian 
                terjaga dalam kondisi yang sehat dan nyaman. Melalui pemantauan kualitas udara yang cermat, dapat 
                dihasilkan pemahaman yang lebih baik tentang tingkat polusi udara dalam ruangan dan dampaknya 
                terhadap kesehatan masyarakat. Dengan demikian, penelitian ini tidak hanya mendukung upaya 
                pemahaman ilmiah tetapi juga memberikan kontribusi nyata untuk menciptakan hunian yang sehat dan 
                berkelanjutan di Lumajang dengan memanfaatan IoT dan jaringan internet. 
              </p>
            </div>
          </div>
        </div>
        <div
          className="my-4 dark:bg-gray-800 dark:text-black"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
            width: "100%",
            background: "white",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={squareIcon}
            alt="Icon 3"
            width={30}
            className="float-right mb-2"
          />
          <div>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "18px",
                lineHeight: "1.5",
                wordWrap: "break-word",
                margin: 0,
              }}
            >
              Lumajang sebagai suatu daerah yang terus mengalami perkembangan pesat, menghadapi 
              tantangan dalam hal pemantauan kualitas udara. Dengan meningkatnya jumlah hunian 
              dan aktivitas manusia. Integrasi teknologi ini dalam pemetaan hunian di Lumajang 
              dapat memberikan data dan gambaran yang lebih lengkap tentang kualitas udara untuk 
              menciptakan lingkungan hunian yang nyaman dan sehat. Sehingga hasil data pemantauan 
              kualitas udara untuk hunian sehat dan nyaman dapat dikategorikan agar lebih mudah 
              dimengerti oleh masyarakat umum, seperti “Baik”, “Sedang”,”Tidak Sehat”,”Sangat 
              Tidak Sehat”,dan”Berbahaya".
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
