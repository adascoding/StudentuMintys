import { Injectable } from "@angular/core";

@Injectable()

export class QuestionsService {
    questions = [
        { id: 1, title: 'Pirmas klausimas' },
        { id: 2, title: 'Antras klausimas'}
    ];

    addQuestion(id: number, title: string) {
        this.questions.push(
            {id: id, title: title}
        );
    }
}