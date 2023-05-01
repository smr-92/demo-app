import AppHeader from './Components/AppHeader/AppHeader';
import Table from './Components/Table/Table';
import { useAppSelector } from './Redux/hooks';

const App: React.FC = () => {
  const data: any[] = useAppSelector(state => state.data);
  const loading: boolean = useAppSelector(state => state.loading);
  const selectedOption: string = useAppSelector(state => state.selectedOption);

  const getBody = () => {
    if (loading && data.length === 0) {
      return <p>Data is loading. Please wait.</p>
    } else if (!loading && !selectedOption) {
      return <p>Please select any option to load the data.</p>
    } else {
      return <Table data={data} />
    }
  }
  
  return (
    <>
      <AppHeader />
      {
        getBody()
      }
    </>
  );
};

export default App;