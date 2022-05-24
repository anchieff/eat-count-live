import DailyReportsBlock from "./components/DailyReports/DailyReportsBlock/DailyReportsBlock";
import NewDailyReport from "./components/DailyReports/NewDailyReports/NewDailyReports";

const App = () => {
  return (
    <div>
      <NewDailyReport />
      <DailyReportsBlock />
    </div>
  );
};

export default App;
