import { connect } from "react-redux";
import PropTypes from "prop-types";
import getLeads from "../actions/leads";
const LeadList = ({ leads }) => {
  LeadList.propTypes = {
    leads: PropTypes.array.isRequired,
  };
  return <div>From LeadList</div>;
};

const mapStatetoProps = (state) => ({
  leads: state.leads.leads,
});
export default connect(mapStatetoProps, { getLeads })(LeadList);
