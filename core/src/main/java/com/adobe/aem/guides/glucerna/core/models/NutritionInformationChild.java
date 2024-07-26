package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NutritionInformationChild {
    private @ValueMapValue String elementName;
    private @ValueMapValue String dailyValue;

    public String getElementName() {
        return elementName;
    }

    public String getDailyValue() {
        return dailyValue;
    }
}
