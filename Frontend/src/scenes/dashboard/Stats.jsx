
import { useTheme } from "@mui/material";

const Stats = () => {
  const theme = useTheme();
  const backgroundColor = theme.palette.background.default; // dark or light background
  const backgroundColor1 = theme.palette.background.alt; // dark or light background
  const textColor = theme.palette.secondary[200]; // general text color
  const secondaryTextColor = theme.palette.neutral[300]; // for softer text like subtitles

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      style={{
        backgroundColor: backgroundColor1,
      }}
    >
      {/* Stat Cards */}
      {[
        { title: "10k Total Registers", subtitle: "+4% (30 days)" },
        { title: "357 Active Users", subtitle: "+6% (1 day)" },
        { title: "10 Available Spots", subtitle: "Last 10 minutes" },
        { title: "15 Booked Spots", subtitle: "2% (per hour)" },
      ].map((stat, index) => (
        <div
          key={index}
          style={{
            backgroundColor: backgroundColor,
            color: textColor,
          }}
          className="p-4 rounded-lg h-24 text-center"
        >
          <h3 className="text-lg font-semibold text-center">{stat.title}</h3>
          <div style={{ color: secondaryTextColor }} className="text-sm">
            {stat.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
