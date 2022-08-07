from .functions_and_values import *

"""
input : quote object
output : price calculated
"""
def checkout_algo(quote):
    previous_cancelled_additional_fee=0
    in_volcano_state_additional_fee =0
    non_canellation_discount=0
    has_property_discount=0
# if the user has previously canclled the volano policy then add charges else give a discount
    if(quote.previous_policy_cancelled): #find addtional charges
        previous_cancelled_additional_fee = base_premium  * percent_calc(previous_cancelled_fee)
    else:
        non_canellation_discount = base_premium * percent_calc(discount_for_not_cancelled)
#if user lives in a state where volcano present add charges
    if(quote.state in vol_list):
        in_volcano_state_additional_fee = base_premium * percent_calc(state_with_volcano)
#if user owns an property give discounts
    if(quote.owns_property):
        has_property_discount = base_premium * percent_calc(has_property)
#calculates all additional charges
    total_additional_fee = previous_cancelled_additional_fee + in_volcano_state_additional_fee
#sum all discounts
    total_discount = non_canellation_discount + has_property_discount
#total price for 6 months after calculation
    total_term_premium = base_premium + total_additional_fee - total_discount
#price per month
    monthy_premium = per_month_calc(total_term_premium)
    additional_fee_per_month = per_month_calc(total_additional_fee)
    discount_per_month = per_month_calc(total_discount)
    price_object ={
    "base_premium":formatter(base_premium),
    "total_premium":formatter(total_term_premium),
    "total_premium_per_month":formatter(monthy_premium),
    "total_additional_fee":formatter(total_additional_fee),
    "additional_fee_per_month":formatter(additional_fee_per_month),
    "total_discount":formatter(total_discount),
    "total_discount_per_month":formatter(discount_per_month),
    
    }
    return price_object
   
