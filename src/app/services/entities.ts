export class Question {
    id: number;
    qText: string;
    correctChoiceId: number;
    choices: Choice[];
    isAnswered = false;
    isCorrectAnswer = false;
    isWrongAnser = false;
    category: Category;
}

export class Choice {
    id: number;
    choiceLabel: string;
    qOrder: number;
    qText: string;
    isCorrect: number;
    description: string;
    selectedChoice: boolean;
    selectedColor: string;
}

export class Category {
    id: number;
    qText: string;
    selected: boolean;
    version: number;
    book: QuizBook;
}


export class QuizStatistics {
    quizName: string;
    correct: number;
    wrong: number;
    empty: number;
    netCorrect: number;
}


export class Version {
    versionNumber: number;
}

export class EncryptedObject {
    encryptedData: string;
}
export class BookType {
    id: number;
    code: number;
    qText: string;
    status: boolean;
    version: number;
    totalRecords: number;
}

export class QuizBook {
    id: number;
    description: string;
    qText: string;
    bookType: BookType;
    imagePath: string;
    image = '../../assets/imgs/defaultBook.png';
    epub: string;
    status: number;
    version: number;
    price: number;
    duration: number;
    totalRecords: number;
    categories: Category[];
}

export class BookEpub {
    label: string;
    file: string;
    encoding: string;
}

export class User {
    id: number;
    username: string;
    phoneNumber: number;
    email: string;
    birtdate: Date;
    gender: number;
    facebookId: number;
    password: string;
    settings: string;
}
