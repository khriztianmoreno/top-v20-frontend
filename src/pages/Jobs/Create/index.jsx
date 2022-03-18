import Navigation from '../../../components/Navigation';
import AddJobForm from '../../../components/AddJob';
import Footer from '../../../components/Footer';

function AddJob() {
  return (
    <div className="nav-on-header smart-nav bg-alt">
      <Navigation />

      <AddJobForm />

      <Footer />
    </div>
  );
}

export default AddJob;
