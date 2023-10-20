from django.db import models

from wagtail.models import Page
from wagtail.admin.panels import FieldPanel, MultiFieldPanel, InlinePanel
class HomePage(Page):
    template = "home/home_page.html"
    title_2 = models.CharField(max_length=255, blank=True,null=True)
    
    content_panels = Page.content_panels + [FieldPanel("title_2")]
    
