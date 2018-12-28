import { FormControl } from "@angular/forms";

export function restrictedWords(words) {
    // fn returning a fn
    return (control: FormControl): { [key: string]: any } => {
        if (!words) return null;

        var invalidWords = words.map(w => control.value.includes(w) ? w : null)
            .filter(w => w != null);

        return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(',') } : null; // here restrictedWords should match with the validator name (func name)
    }
}