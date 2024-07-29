package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ProductIngredients {
    private @ValueMapValue String ingTitle;
    private @ValueMapValue String descTitle;
    private @ValueMapValue String description;

    public String getIngTitle() {
        return ingTitle;
    }

    public String getDescTitle() {
        return descTitle;
    }

    public String getDescription() {
        return description;
    }
}
