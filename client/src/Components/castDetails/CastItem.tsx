import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function CastItem({ castdata }: { castdata: any }) {
  return (
    <div className="castItem" style={{ padding: "12px" }}>
      <Card
        sx={{
          height: 300,
          Width: 128,
          //   marginX: "15px",
          backgroundColor: "#373636",
          borderRadius: "15px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          transition: "box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.7)",
          },
          "@media (max-width: 321px)": {
            height: 300,
            width:200
          },
        }}
      >
        <CardMedia
          sx={{
            height: 175,
            width: 138,
            "@media (max-width: 770px)": {
              height: 200,
              width:155
            },
            "@media (max-width: 426px)": {
              height: 200,
              width:175
            },
            "@media (max-width: 321px)": {
              height: 200,
              width:200
            },
          }}
          image={require(`../../Assets/Details/${castdata.imageUrl}`)}
          title="cast1"
        />
        <CardContent>
          <Typography
            component="div"
            style={{
              fontSize: "16px",
              fontWeight: 600,
              fontFamily: "Fredoka",
              color: "#DB0000",
            }}
          >
            {castdata.name}
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Fredoka",
              color: "#FFF",
              marginTop: "5px",
            }}
          >
            {castdata.character}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
