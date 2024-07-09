package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import lombok.Getter;

@Getter
@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class BannerDescription {

    @ValueMapValue
    private String logoReference;

    @ValueMapValue
    private String titledetails;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String discountdescription;

    @ValueMapValue
    private String buttontext;

    @ValueMapValue
    private String backgroundimage;


}
