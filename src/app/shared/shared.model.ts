export class Upload {
    $key: string;
    file: File;
    name: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();
}

export class NoteMaster {
    noteType: string;
    noteTitle?: string = null;
    noteDesc: string = "";
    noteAttachment?: Upload = new Upload();
    noteCreatedDate: Date = new Date();
}

export class FileExtensionInfo {
    status: string;
    text: string;
}

export class NoteTypeMaster {
    typeId: string;
    typeDesc: string;
    typeBGColor: string;
}

export const NOTETYPEMASTERDATA: NoteTypeMaster[] = [
    {
        "typeId": "text",
        "typeDesc": "Text",
        "typeBGColor": "#d7e8c0"
    },
    {
        "typeId": "article",
        "typeDesc": "Article",
        "typeBGColor": "#f5aca9"
    },
    {
        "typeId": "picture",
        "typeDesc": "Picture",
        "typeBGColor": "#fff1b3"
    },
    {
        "typeId": "document",
        "typeDesc": "Document",
        "typeBGColor": "#cff4f8"
    }
]

export class AgentMaster {
    $key?: string;
    name: string;
    mobileNo: string;
    pincodeRangeFrom: number;
    pincodeRangeTo: number;
    createdDate: string;
}

export class AddressMaster {
    $key?: string;
    name: string;
    mobileNo: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    pincode: number;
    createdDate: string;
}

export class TestMaster {
    $key?: string;
    name: string;
    desc: string;
    cost: string;
    createdDate: string;
}

export class OrderMaster {
    $key?: string = "";
    testKey: string = "";
    agentKey: string = "";
    addressKey: string = "";
    isChecked: boolean = false;
    createdDate: string;
}

export class AgentVsOrderMaster {
    agentKey: string;
    agentName: string;
    orderList: OrderMapMaster[];
}

export class OrderMapMaster {
    testName: string;
    addressName: string;
    createdDate: string;
}

export const COLORLIST: string[] = ["#d7e8c0", "#f5aca9", "#fff1b3", "#cff4f8"];
