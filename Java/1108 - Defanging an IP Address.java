/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/
class Solution {
    public String defangIPaddr(String address) {
        String word="";
        String configDot = "[.]";
        int point = 0;
        for(int i = 0; i < address.length(); i++){
            if(address.charAt(i) == '.'){
                word += address.substring(point, i) + configDot;
                point = i+1;
            }
        }
        word += address.substring(point, address.length());
        return word;
    }
}