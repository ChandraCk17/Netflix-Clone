import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { Axios } from "axios";

export default function Home() {
  const MONTHS = useMemo(
     () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
     ],
     []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await Axios.get("/users/stats", {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjdjNWE4MTg0MTBjZTczYzU5MmQxZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDExMjY0MiwiZXhwIjoxNjcwNTQ0NjQyfQ.OF5xsZmXrvWRGBnZdoeEG6IMMyj4jHDe366Wm99KDW8",
          },
        });
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id -1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userStats} title="User Analytics" grid datakey="New User" />
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
  );
}
