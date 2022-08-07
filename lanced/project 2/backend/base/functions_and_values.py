base_premium = 59.94

previous_cancelled_fee = 15
state_with_volcano = 25 


discount_for_not_cancelled = 10
has_property = 20
#list of state containing volcano
vol_list =[
'Alaska','Arizona','California',
'Colorado','Hawaii','Idaho',
'Nevada','New Mexico','Oregon',
'Utah','Washington','Wyoming' ]


def percent_calc(val):
    x = val/100
    return x

def per_month_calc(val):
    x= val/6
    return x

def formatter(val):
    return "$"+ format(val,".2f")