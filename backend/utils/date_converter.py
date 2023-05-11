import dateparser


class Date():
    def date_converter(dateString: str):
        return dateparser.parse(dateString)