def sample_variance(sample: list) -> float or str:
    """Calculate the average

    Args:
        sample (list): List of integers positives and negatives

    Returns:
        float or str: result of calculating the average
    """

    number_of_terms = len(sample)
    sum_of_sample = sum(sample)

    result = 'Indefinite'
    if sum_of_sample != 0:
        result = sum_of_sample / number_of_terms

    return result


def run():
    sample = []
    numbers = input('Plase enter your numbers separate with a space: ')

    for number in [int(n) for n in numbers.split(" ")]:
        if number != 0:
            sample.append(number)

    result = sample_variance(sample)

    print(f'The average is: {result}')


if __name__ == '__main__':
    run()
