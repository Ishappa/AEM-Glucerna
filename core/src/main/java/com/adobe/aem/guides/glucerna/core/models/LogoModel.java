package com.adobe.aem.guides.glucerna.core.models;

import lombok.Getter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {Resource.class, SlingHttpServletRequest.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Getter
public class LogoModel {

    @ValueMapValue
    private String logoImage;

    @ValueMapValue
   private String abbottLogo;

    @ValueMapValue
    private String logoUrl;

    @ValueMapValue
    private String abbottLogoUrl;

    @ValueMapValue
    private String newTab;

}
