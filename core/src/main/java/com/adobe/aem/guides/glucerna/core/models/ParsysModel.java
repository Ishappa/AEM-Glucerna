package com.adobe.aem.guides.glucerna.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import java.util.ArrayList;
import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ParsysModel {

    @ValueMapValue
    private String parsys;

    @ValueMapValue(name = "tworatios")
    private String twoRatios;

    @ValueMapValue(name = "twoparsysId")
    private String twoParsysId;

    @ValueMapValue(name = "threeratios")
    private String threeRatios;

    @ValueMapValue(name = "threeparsysId")
    private String threeParsysId;

    @ValueMapValue(name = "fourratios")
    private String fourRatios;

    @ValueMapValue(name = "fourparsysId")
    private String fourParsysId;

    @ValueMapValue(name = "fiveratios")
    private String fiveRatios;

    @ValueMapValue(name = "fiveparsysId")
    private String fiveParsysId;

    public String getParsys() {
        return parsys;
    }

    public String getId() {
        switch (parsys) {
            case "twoparsys":
                return twoParsysId != null ? twoParsysId : "defaultTwoParsysId";
            case "threeparsys":
                return threeParsysId != null ? threeParsysId : "defaultThreeParsysId";
            case "fourparsys":
                return fourParsysId != null ? fourParsysId : "defaultFourParsysId";
            case "fiveparsys":
                return fiveParsysId != null ? fiveParsysId : "defaultFiveParsysId";
            default:
                return "defaultParsysId";
        }
    }

    public String getTwoRatios() {
        return twoRatios != null ? twoRatios : "6:6"; // Default to 6:6 if no ratio is provided
    }

    public List<Integer> getTwoRatiosList() {
        return parseRatios(getTwoRatios());
    }

    public String getThreeRatios() {
        return threeRatios != null ? threeRatios : "4:4:4"; // Default to 4:4:4 if no ratio is provided
    }

    public List<Integer> getThreeRatiosList() {
        return parseRatios(getThreeRatios());
    }

    public String getFourRatios() {
        return fourRatios != null ? fourRatios : "3:3:3:3"; // Default to 3:3:3:3 if no ratio is provided
    }

    public List<Integer> getFourRatiosList() {
        return parseRatios(getFourRatios());
    }

    public String getFiveRatios() {
        return fiveRatios != null ? fiveRatios : "2:2:2:2:2"; // Default to 2:2:2:2:2 if no ratio is provided
    }

    public List<Integer> getFiveRatiosList() {
        return parseRatios(getFiveRatios());
    }

    private List<Integer> parseRatios(String ratios) {
        List<Integer> ratioList = new ArrayList<>();
        String[] ratioArray = ratios.split(":");
        for (String ratio : ratioArray) {
            try {
                ratioList.add(Integer.parseInt(ratio.trim()));
            } catch (NumberFormatException e) {
                ratioList.add(6); // Default to 6 if parsing fails
            }
        }
        return ratioList;
    }

    public List<Integer> getColumnRatios() {
        switch (parsys) {
            case "twoparsys":
                return getTwoRatiosList();
            case "threeparsys":
                return getThreeRatiosList();
            case "fourparsys":
                return getFourRatiosList();
            case "fiveparsys":
                return getFiveRatiosList();
            default:
                return new ArrayList<>();
        }
    }
}
