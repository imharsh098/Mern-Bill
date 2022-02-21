import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./Profile";
import axios from "axios";

function Personal() {
  const [data, setData] = useState({});
  useEffect(async () => {
    const config = {
      headers: {
        "x-auth-key":
          "U2FsdGVkX1/GovesLejGRwMt+M2dJr1fckG6oZw0BU3zzhHarX4L/U8cZ42R7DTObF8zfEvajXr8c4Dz0RJ7br17LGPVTw/HlLFB1FZyd1LpZYZ9g82SAJBtbcu4hEbih6L3SkSuqE5tbCiolVSEK6LHH2yWTkdpYRAfLudX0Kp625xGmbMwQJlFoW1nM3eIeiJgfhSDQqQ3m9Im/06vTRfJ4M3/N2OqVc0Nhcz79vr+ZMyFrsglBktspNDIw/6i",
      },
    };
    const { info } = await axios.get("/api/users/profile", config);
    setData(info);
  }, []);
  return <Profile profile={data} />;
}

export default Personal;
