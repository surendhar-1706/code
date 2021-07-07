from django.views import View
from django.http import JsonResponse


class RedirectSocial(View):

    def get(self, request, *args, **kwargs):
        code, state = str(request.GET['code']), str(request.GET['state'])
        sess = request.session
        json_obj = {'code': code, 'state': state,
                    'session': sess}
        print(json_obj)
        return JsonResponse(json_obj)
