import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import axios from "axios";

function HistorySenduro() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // function "fetchData"
  const fetchData = async () => {
    const response = await axios.get("https://backend.sikudalumajang.my.id/senduro");
    const data = response.data.data;

    setPosts(data);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id", options);
  };

  const events = [
    {
      title: "Pura Mandara Giri Semeru Agung",
      description:
        "Selain tempat ibadah umat Hindu, Pura Mandara Giri Semeru Agung juga menjadi destinasi wisata religi dan banyak wisatawan berkunjung",
      image:
        "https://img.kontenjatim.id/articles/archive_20230818/pura-mandara-giri-semeru-agung-20230818-203412.webp",
    },
    {
      title: "Alas Burno Senduro",
      description:
        " Alas Burno Senduro atau yang dikenal dengan nama Siti Sundari Lumajang merupakan sebuah destinasi wisata yang dikelilingi hutan pinus yang indah.",
      image:
        "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/803/2023/12/22/image-18-103230574.png",
    },
    {
      title: "Cagar Budaya Selogending Senduro",
      description:
        "Situs Selogending yang dipugar dan dibangun pura pada tahun 1996sebagai tempat ibadah oleh umat Hindu sekitar bahkan umat Hindu dari Bali.",
      image:
        "https://cdn.visitlumajang.com/images/2022/02/7be51c5f6968aae06be2656379942458.jpg",
    },
  ];

  const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
  return (
    <div className="row-span-11 p-4 overflow-y-auto mt-32">
      <Container>
        <Box
          sx={{
            bgcolor: "#2D1B6B",
            color: "white",
            p: 4,
            textAlign: "center",
            animation: `${fadeIn} 2s ease-in-out`,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" gutterBottom fontFamily="Poppins">
            History Senduro
          </Typography>
          <Typography variant="body1" paragraph fontFamily="Poppins">
            Senduro adalah sebuah desa di Kecamatan Senduro, Kabupaten Lumajang,
            provinsi Jawa Timur, Indonesia. Desa Senduro memiliki potensi yang
            sangat menarik di bidang pariwisata. Desa Senduro disebut juga
            sebagai Desa Bunga Edelweiss. Senduro memiliki tempat ibadah umat
            hindu yaitu Pura Mandara Giri Semeru Agung. Senduro juga adalah
            tempat seribu pemandangan yang berbeda, sehingga banyak para
            wisatawan yang datang ke Senduro.
          </Typography>
        </Box>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  animation: `${fadeIn} 1.5s ease-in-out ${index * 0.5}s`,
                  animationFillMode: "forwards",
                  opacity: 0,
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ bgcolor: "#f5f5f5" }}>
                  <Typography variant="h6" component="div" fontFamily="Poppins">
                    {event.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontFamily="Poppins"
                  >
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontFamily="Poppins"
            textAlign="center"
          >
            Kualitas Udara (30 Hari Terakhir)
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: 2, boxShadow: 3 }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Tanggal</TableCell>
                  <TableCell align="justify">PM10</TableCell>
                  <TableCell align="justify">PM2.5</TableCell>
                  <TableCell align="justify">NO2</TableCell>
                  <TableCell align="justify">HUMIDITY</TableCell>
                  <TableCell align="justify">TEMP</TableCell>
                  <TableCell align="justify">KONDISI</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((post) => (
                  <TableRow
                    key={post.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {formatDate(post.tanggal)}
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_PM10_concentration} µg/m3
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_PM25_concentration} µg/m3
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_NO2_concentration} µg/m3
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_humidity} %
                    </TableCell>
                    <TableCell align="justify">
                      {post.rata_temperature} °C
                    </TableCell>
                    <TableCell align="justify">{post.modus_average}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontFamily="Poppins"
            textAlign="center"
          >
            Lokasi Senduro
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              borderRadius: 2,
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.096979684573!2d113.08536557595012!3d-8.091592191937007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6417a54a69f17%3A0xf34f010a8c8d1817!2sPura%20Mandhara%20Giri%20Semeru%20Agung!5e0!3m2!1sen!2sid!4v1720074331119!5m2!1sen!2sid"
              width="1200"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </div>
  );
  // return (
  //         <div className="row-span-11 p-4 overflow-y-auto mt-32">
  //         <Container>
  //           <Box
  //             sx={{
  //               bgcolor: "#2D1B6B",
  //               color: "white",
  //               p: 4,
  //               textAlign: "center",
  //               animation: `${fadeIn} 2s ease-in-out`,
  //               borderRadius: 2,
  //               boxShadow: 3,
  //             }}
  //           >
  //             <Typography variant="h3" gutterBottom fontFamily="Poppins">
  //               History Senduro
  //             </Typography>
  //             <Typography variant="body1" paragraph fontFamily="Poppins">
  //             Senduro adalah sebuah desa di Kecamatan Senduro, Kabupaten Lumajang,
  //             provinsi Jawa Timur, Indonesia. Desa Senduro memiliki potensi yang sangat
  //             menarik di bidang pariwisata. Desa Senduro disebut juga sebagai Desa Bunga
  //             Edelweiss. Senduro memiliki tempat ibadah umat hindu yaitu Pura Mandara Giri
  //             Semeru Agung. Senduro juga adalah tempat seribu pemandangan yang berbeda,
  //             sehingga banyak para wisatawan yang datang ke Senduro.
  //             </Typography>
  //           </Box>
  //           <Grid container spacing={4} sx={{ mt: 2 }}>
  //             {events.map((event, index) => (
  //               <Grid item xs={12} sm={6} md={4} key={index}>
  //                 <Card
  //                   sx={{
  //                     animation: `${fadeIn} 1.5s ease-in-out ${index * 0.5}s`,
  //                     animationFillMode: "forwards",
  //                     opacity: 0,
  //                     borderRadius: 2,
  //                     boxShadow: 3,
  //                     overflow: "hidden",
  //                   }}
  //                 >
  //                   <CardMedia
  //                     component="img"
  //                     height="150"
  //                     image={event.image}
  //                     alt={event.title}
  //                   />
  //                   <CardContent sx={{ bgcolor: "#f5f5f5" }}>
  //                     <Typography variant="h6" component="div" fontFamily="Poppins">
  //                       {event.title}
  //                     </Typography>
  //                     <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
  //                       {event.description}
  //                     </Typography>
  //                   </CardContent>
  //                 </Card>
  //               </Grid>
  //             ))}
  //           </Grid>
  //           <Box sx={{ mt: 4 }}>
  //             <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
  //               Kualitas Udara (30 Hari Terakhir)
  //             </Typography>
  //             <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
  //               <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //                 <TableHead>
  //                   <TableRow>
  //                     <TableCell>Tanggal</TableCell>
  //                     <TableCell align="right">PM10</TableCell>
  //                     <TableCell align="right">PM2.5</TableCell>
  //                     <TableCell align="right">O3</TableCell>
  //                     <TableCell align="right">NO2</TableCell>
  //                     <TableCell align="right">SO2</TableCell>
  //                     <TableCell align="right">CO</TableCell>
  //                   </TableRow>
  //                 </TableHead>
  //                 <TableBody>
  //                   {airQualityData.map((row) => (
  //                     <TableRow
  //                       key={row.date}
  //                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  //                     >
  //                       <TableCell component="th" scope="row">
  //                         {row.date}
  //                       </TableCell>
  //                       <TableCell align="right">{row.pm10}</TableCell>
  //                       <TableCell align="right">{row.pm2_5}</TableCell>
  //                       <TableCell align="right">{row.o3}</TableCell>
  //                       <TableCell align="right">{row.no2}</TableCell>
  //                       <TableCell align="right">{row.so2}</TableCell>
  //                       <TableCell align="right">{row.co}</TableCell>
  //                     </TableRow>
  //                   ))}
  //                 </TableBody>
  //               </Table>
  //             </TableContainer>
  //           </Box>
  //           <Box sx={{ mt: 4 }}>
  //             <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
  //               Lokasi Senduro
  //             </Typography>
  //             <Box
  //               sx={{
  //                 display: "flex",
  //                 justifyContent: "center",
  //                 mt: 2,
  //                 borderRadius: 2,
  //                 boxShadow: 3,
  //                 overflow: "hidden",
  //               }}
  //             >
  //               <iframe
  //                 src="https://www.google.com/maps?q=-8.11091,113.26795&z=15&output=embed"
  //                 width="1200"
  //                 height="450"
  //                 style={{ border: 0 }}
  //                 allowFullScreen=""
  //                 loading="lazy"
  //               ></iframe>
  //             </Box>
  //           </Box>
  //         </Container>
  //       </div>
  // );
}

export default HistorySenduro;
