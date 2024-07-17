package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import lombok.Getter;

@Getter
@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class BannerImage {

    @ValueMapValue
    private  String desktopRefernce;

    @ValueMapValue
    private String desktoptitle;

    @ValueMapValue
    private String mobileReference;

    @ValueMapValue
    private String mobiletitle;

}