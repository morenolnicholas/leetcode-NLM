class Solution:
    def reverseString(self, s: List[str]) -> None:
        listSize = ceil(len(s) / 2)
        for i in range(listSize):
            tempVal = s[i]
            s[i] = s[(len(s) - 1) - i]
            s[(len(s) - 1) - i] = tempVal
        

        """
        Write a function that reverses a string.
        The input string is given as an array of characters char[].

        Do not allocate extra space for another array,
        you must do this by modifying the input array in-place with O(1) extra memory.

        Do not return anything, modify s in-place instead.
        """
