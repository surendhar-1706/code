import us
def merge(list1, list2):
    merged_list = tuple(zip(list1, list2)) 
    return merged_list


def states():
    state_names = [state.name for state in us.states.STATES_AND_TERRITORIES]
    state_names.insert(0,' ')
    state_choices = merge(state_names,state_names)
    return state_choices