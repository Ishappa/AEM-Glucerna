package com.adobe.aem.guides.glucerna.core.models;

import lombok.Getter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Getter
public class CookiePopUp {

    @ValueMapValue
    private String backgroundImage;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String description;

    @ValueMapValue
    private String buttonOneLink;

    @ValueMapValue
    private String buttonOne;

    @ValueMapValue
    private String buttonTwoLink;

    @ValueMapValue
    private String buttonTwo;

    @ValueMapValue
    private String thanks;

    @ValueMapValue
    private String finalDescription;
}
