export default function getListStudentIds(student) {
    if (!Array.isArray(student)) {
        return [];
    }
    const ids = student.map((item) => item.id);
    return ids;
}