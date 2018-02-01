var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }
    let aPointer = headA;
    let bPointer = headB;
    
    while (aPointer && bPointer && (aPointer !== bPointer) ) {
        aPointer = aPointer.next;
        bPointer = bPointer.next;
        
        if (aPointer === bPointer) {
            return aPointer;
        }
        if (!aPointer) aPointer = headB;
        if (!bPointer) bPointer = headA;
        
    }
    return aPointer//aPointer and bPointer will be at null if it exits while loop anyway
    
};