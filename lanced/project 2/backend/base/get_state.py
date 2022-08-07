import us #library to get all us states

"""Takes two data and makes it into tuples and return them as list """
def merge(list1, list2):
    merged_list = tuple(zip(list1, list2)) 
    return merged_list


def states():
    state_names = [state.name for state in us.states.STATES_AND_TERRITORIES] #loop throught available state and get state name and put it into list
    state_names.insert(0,' ')
    state_choices = merge(state_names,state_names) #calling merge function this will be used as choice filed in models
    return state_choices


# wow = states()
# print(wow)