import { useState, useEffect } from 'react';
// import { Card, Container, Row, Col, Table } from 'react-bootstrap';
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
import axios from 'axios';
import { keyframes } from "@emotion/react";


function HistoryPasirian() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // function "fetchData"
    const fetchData = async () => {
        const response = await axios.get('https://back-end-terbaru.vercel.app/pasirian');
        const data = response.data.data;

        setPosts(data);
    }


    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id', options);
    };

    const events = [
      {
        title: "Pantai Bambang Pasirian",
        description: "Pantai Bambang ini merupakan salah satu pantai penghasil batu hias, yang terletak di desa Bago, kecamatan Pasirian, Kabupaten Lumajang.  ",
        image: "https://lumajangsatu.com/po-content/uploads/Pantai-Bambang.jpg",
      },
      {
        title: "Alun-alun Pasirian",
        description: "Alun-alun Pasirian menjadi Central Park karena Kecamatan Pasirian memiliki jumlah penduduk terpadat kedua setelah kecamatan Lumajang.",
        image: "data:image/jpeg;base64,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",
      },
      {
        title: "Tambang Pasir",
        description: "Situs Selogending yang dipugar dan dibangun pura pada tahun 1996sebagai tempat ibadah oleh umat Hindu sekitar bahkan umat Hindu dari Bali.",
        image: "https://asset-2.tstatic.net/surabaya/foto/bank/images/jalur-khusus-tambang-pasir-di-lumajang.jpg",
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
          History Pasirian
        </Typography>
        <Typography variant="body1" paragraph fontFamily="Poppins">
        Pasirian adalah sebuah kecamatan di Kabupaten Lumajang, Provinsi Jawa Timur, Indonesia.
        Kecamatan ini memiliki jumlah penduduk terbesar di Kabupaten Lumajang.Kecamatan ini juga 
        memiliki sebuah taman yang cukup besar dan asri. Hasil utama dari Pasirian adalah pertambangan 
        pasir besi yang diekspor ke luar negeri serta pariwisata berupa pantai selatan yang sangat indah.
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
                <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
          Kualitas Udara (30 Hari Terakhir)
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 3 }}>
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
              {posts.map((post) => 
               <TableRow
               key={post.id}
               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             >
               <TableCell component="th" scope="row">{formatDate(post.tanggal)}</TableCell>
               <TableCell align="justify">{post.rata_PM10_concentration} µg/m3</TableCell>
               <TableCell align="justify">{post.rata_PM25_concentration} µg/m3</TableCell>
               <TableCell align="justify">{post.rata_NO2_concentration} µg/m3</TableCell>
               <TableCell align="justify">{post.rata_humidity} %</TableCell>
               <TableCell align="justify">{post.rata_temperature} °C</TableCell>
               <TableCell align="justify">{post.modus_average}</TableCell>
             </TableRow>
              )}
               
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom fontFamily="Poppins" textAlign="center">
          Lokasi Pasirian
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
            src="https://www.google.com/maps?q=-8.11091,113.26795&z=15&output=embed"
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
}

export default HistoryPasirian;

